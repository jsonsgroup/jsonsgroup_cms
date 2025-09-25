import mongoose from 'mongoose';

export interface IPage extends mongoose.Document {
  title: string;
  slug: string;
  content: string;
  company: string;
  status: 'draft' | 'published';
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  author: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const PageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  company: { type: String, required: true },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

export default mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema);