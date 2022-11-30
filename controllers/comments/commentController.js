const commentCreateCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const commentGetCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment route",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const commentDeleteCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment delete",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const commentUpdateCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment update",
    });
  } catch (error) {
    res.json(error.message);
  }
}

module.exports = {
  commentCreateCtrl,
  commentGetCtrl,
  commentDeleteCtrl,
  commentUpdateCtrl
};
