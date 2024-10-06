import mongoose from "mongoose";
const profileSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    dob: { type: Date },
    birthPlace: { type: String },
    nationality: { type: String },
    education: [
      {
        degree: { type: String },
        institution: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    skills: [{ type: String }],
    projects: [
      {
        projectName: { type: String },
        description: { type: String },
        role: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    workingProgress: [
      {
        companyName: { type: String },
        role: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    hobbies: [{ type: String }],
    targets: [{ type: String }],
  },
  { timestamps: true }
);

const ProfileModel = mongoose.model("Profile", profileSchema);
export default ProfileModel;
