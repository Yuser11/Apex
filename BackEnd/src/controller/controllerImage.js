const controllerImage = {
  salvar: async (req, res) => {
    try {
      let sampleFile;
      let uploadPath;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
      }

      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      sampleFile = req.files.sampleFile;
      uploadPath = __dirname + "/somewhere/on/your/server/" + sampleFile.name;

      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);

        res.send("File uploaded!");
      });
    } catch (error) {
      console.log(error);
      console.log(error.code);
      res.status(500).json({ API: error });
    }
  },
};
export default controllerImage;
