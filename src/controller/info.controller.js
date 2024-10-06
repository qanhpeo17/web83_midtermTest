import UserModel from "../models/user.model.js";
import ProfileModel from "../models/profile.model.js";
export const createInfo = async (req, res) => {
  try {
    const inputedData = req.body;
    const newProfile = await ProfileModel.create(inputedData);
    const user = req.user;

    await UserModel.findByIdAndUpdate(user._id, { profile: newProfile._id });
    res.status(201).json({ message: "Thanh cong", newProfile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getInfo = async (req, res) => {
  try {
    const { profileId } = req.body;
    const profile = await ProfileModel.findById(profileId);
    if (!profile) {
      return res.status(404).json({ message: "khong tim thay" });
    }
    res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateInfo = async (req, res) => {
  try {
    const { profileId, newData } = req.body;
    if (!profileId || !newData) {
      return res.status(400).json({ message: "Thieu thong tin" });
    }
    const user = req.user;
    const userExists = await UserModel.findById(user._id);
    if (!userExists || !userExists.profile.equals(profileId)) {
      return res.status(403).json({ message: "Ban ko co quyen" });
    }

    const updatedProfile = await ProfileModel.findByIdAndUpdate(
      profileId,
      newData,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteInfo = async (req, res) => {
  try {
    const { profileId } = req.body;
    if (!profileId) {
      return res.status(400).json({ message: "Thieu thong tin" });
    }
    const user = req.user;
    const userExists = await UserModel.findById(user._id);
    if (!userExists || !userExists.profile.equals(profileId)) {
      return res.status(403).json({
        message: "Ban ko co quyen",
      });
    }
    const deletedInfo = await ProfileModel.findByIdAndDelete(profileId);
    res.status(200).json({
      message: "Xoa ho so thanh cong",
      deletedInfo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const infoController = {
  createInfo,
  getInfo,
  updateInfo,
  deleteInfo,
};
export default infoController;
