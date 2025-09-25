import PageEditor from '@/components/PageEditor';

export default function NewPagePage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Create New Page</h2>
        <p className="mt-1 text-sm text-gray-600">
          Add a new page to your website.
        </p>
      </div>
      <PageEditor />
    </div>
  );
}