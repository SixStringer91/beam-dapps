#include "Shaders/common.h"
#include "Shaders/app_common_impl.h"
#include "Shaders/Math.h"
#include "contract.h"

#include "board.h"

GemPuzzle::Verdict check_solution(uint64_t permutation_num, const char* solution, uint32_t& moves_num)
{
	GemPuzzle::Board board(permutation_num);

	moves_num = 0;
	for (auto i = 0; solution[i] != '\0'; ++i) {
		GemPuzzle::Board::Moves cur_move;
		switch (toupper(solution[i])) {
		case 'R':
			cur_move = GemPuzzle::Board::RIGHT;
			break;
		case 'L':
			cur_move = GemPuzzle::Board::LEFT;
			break;
		case 'U':
			cur_move = GemPuzzle::Board::UP;
			break;
		case 'D':
			cur_move = GemPuzzle::Board::DOWN;
			break;
		default:
			return GemPuzzle::Verdict::ERROR;
		}
		if (!board.move(cur_move)) {
			return GemPuzzle::Verdict::ERROR;
		}
		++moves_num;
	}
	return board.is_solved() ? GemPuzzle::Verdict::WIN : GemPuzzle::Verdict::LOSE;
}

BEAM_EXPORT void Ctor(GemPuzzle::InitialParams& params)
{
	params.last_used_game_id = 0;
	Env::SaveVar_T(0, params);
}

BEAM_EXPORT void Dtor(void* a)
{
	Env::DelVar_T(0);
}

BEAM_EXPORT void Method_2(const GemPuzzle::NewGameParams& params)
{
	GemPuzzle::AccountInfo acc_info;
	bool is_loaded = Env::LoadVar_T(params.player, acc_info);

	if (!is_loaded) {
		acc_info.pending_rewards = 0;
	} else {
		if (acc_info.has_active_game) {
			Env::Halt();
		}
	}

	acc_info.game_info.ngparams = params;
	acc_info.has_active_game = true;
	Env::SaveVar_T(params.player, acc_info);
	if (params.bet != 0) {
		Env::FundsLock(0, params.bet);
	}
	Env::AddSig(params.player);
}

BEAM_EXPORT void Method_3(const GemPuzzle::CheckSolutionParams& params)
{
	GemPuzzle::AccountInfo acc_info;
	bool is_loaded = Env::LoadVar_T(params.player, acc_info);

	if (!is_loaded || !acc_info.has_active_game) {
		Env::Halt();
	} else {
		Height cur_height = Env::get_Height();
		acc_info.game_result.verdict = check_solution(acc_info.game_info.ngparams.permutation_num, params.solution, acc_info.game_result.moves_num);
		acc_info.game_result.time = cur_height - acc_info.game_info.ngparams.height;
		acc_info.game_result.permutation_num = acc_info.game_info.ngparams.permutation_num;
		acc_info.game_result.player = acc_info.game_info.ngparams.player;

		if (acc_info.game_result.verdict == GemPuzzle::Verdict::WIN) {
			GemPuzzle::InitialParams initial_params;
			Env::LoadVar_T(0, initial_params);

			Amount reward = 0;
			if (acc_info.game_result.time <= initial_params.free_time) {
				reward = initial_params.multiplier * acc_info.game_info.ngparams.bet;
			} else {
				Amount tmp = (acc_info.game_result.time - initial_params.free_time) * initial_params.game_speed / 100;
				if (initial_params.multiplier <= tmp) {
					reward = 0;
				} else {
					reward = (initial_params.multiplier - tmp) * acc_info.game_info.ngparams.bet;
				}
			}
			// Amount reward = std::max(initial_params.multiplier - std::max(acc_info.game_result.time - initial_params.free_time, 0ll) * initial_params.game_speed / 100, 0ll) * acc_info.game_info.ngparams.bet;
			Strict::Add(acc_info.pending_rewards, reward);
			acc_info.has_active_game = false;
			
			Env::SaveVar_T(++initial_params.last_used_game_id, acc_info.game_result);
			Env::SaveVar_T(0, initial_params);
		}

		Env::SaveVar_T(params.player, acc_info);
	}
}

BEAM_EXPORT void Method_4(const GemPuzzle::EndGameParams& params)
{
	GemPuzzle::AccountInfo acc_info;
	bool is_loaded = Env::LoadVar_T(params.player, acc_info);

	if (is_loaded && acc_info.has_active_game) {
		acc_info.has_active_game = false;
		Env::SaveVar_T(params.player, acc_info);
	}
}

BEAM_EXPORT void Method_5(const GemPuzzle::TakePendingRewards& params)
{
	GemPuzzle::AccountInfo acc_info;
	bool is_loaded = Env::LoadVar_T(params.player, acc_info);
	if (is_loaded && acc_info.pending_rewards) {
		Env::FundsUnlock(0, acc_info.pending_rewards);
		acc_info.pending_rewards = 0;
		Env::SaveVar_T(params.player, acc_info);
	}
}
