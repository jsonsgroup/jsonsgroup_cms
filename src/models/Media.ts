import mongoose from 'mongoose';

export interface IMedia extends mongoose.Document {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  company: string;
  uploadedBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const MediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  url: { type: String, required: true },
  company: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

export default mongoose.models.Media || mongoose.model<IMedia>('Media', MediaSchema);