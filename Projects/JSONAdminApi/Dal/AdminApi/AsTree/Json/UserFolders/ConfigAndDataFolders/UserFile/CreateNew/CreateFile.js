let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/CreateFolder");

let PostFunc = async ({ DataPK, inFolderName, inFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;

    if (DataPK > 0) {
        // return await CommonDatasupply.StartFunc({
        //     inDataPK: DataPK,
        //     inFolderName: LocalFolderName,
        //     inFileName: LocalFileName
        // });
        return await(" form dal")
    };
};

module.exports = {
    PostFunc
};