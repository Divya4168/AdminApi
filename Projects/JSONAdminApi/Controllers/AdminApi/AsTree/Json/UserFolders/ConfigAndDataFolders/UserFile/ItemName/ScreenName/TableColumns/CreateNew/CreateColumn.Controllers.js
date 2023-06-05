let Repos = require("../../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/TableColumns/CreateNew/CreateColumn");

let PostFunc = async (req, res) => {


   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalScreenName = req.body.NewScreenName;

   let LocalFromRepo = await Repos.PostFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewScreenName:LocalScreenName
   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};

let DeleteFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalScreenName = req.body.NewScreenName;

   let LocalFromRepo = await Repos.DeleteFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewScreenName:LocalScreenName
   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};


module.exports = { PostFunc,DeleteFunc };