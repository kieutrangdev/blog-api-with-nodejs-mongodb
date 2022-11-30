const cateCreateCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const cateGetCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories route",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const cateDeteleCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories delete",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const cateUpdateCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories update",
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  cateCreateCtrl,
  cateGetCtrl,
  cateDeteleCtrl,
  cateUpdateCtrl,
};
