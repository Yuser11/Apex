const controllerRaiz = {
  raiz: async (req, res) => {
    res.status(200).json({ MSG: "A API ESTA ONLINE" });
  },
};
export default controllerRaiz;
