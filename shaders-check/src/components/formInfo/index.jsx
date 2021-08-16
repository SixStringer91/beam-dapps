import React from 'react'

function FormInfo({dropFilesInfo}) {
    return (
        <div className="form form__info">
        <form className="form__info_shaders" id="form__info_shaders">
            <fieldset className="fieldset_shader">
                <legend id="shader__status">INFO</legend>
                <span id='status__contract_name'>Status: <span id='status__contract' ></span></span>
                <span id='name__contract_name'>Name: <span id='name__contract' ></span>{dropFilesInfo.name.slice(0, -5)}</span>
                <span id='contractId__contract_name'>ContractID: <span id='contractId__contract' ></span></span>
                    <span id='lastModified__contract_name'>LastModified: <span id='lastModified__contract' >{dropFilesInfo.lastModified}</span></span>
                <span id='lastModifiedDate__contract_name'>LastModifiedDate: <span id='lastModifiedDate__contract' ></span></span>
                <span id='size__contract_name'>Size: <span id='size__contract' >{dropFilesInfo.size}</span></span>
            </fieldset>
        </form>
    </div>
    )
}

export default FormInfo
