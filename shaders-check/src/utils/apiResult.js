export default function apiResult(json) {
    const apiAnswer = JSON.parse(json);
    if (apiAnswer.id == 'form-generator') {
      let shaderOut = apiAnswer;
      console.log(JSON.parse(shaderOut.result.output));
    }
}