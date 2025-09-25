import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Jsons Group
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading metal casting & manufacturing conglomerate with 6 specialized companies
            delivering precision solutions across industries.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Jsons Foundry',
              'Western Precicast I', 
              'Western Precicast II',
              'Jsons Engineering',
              'Jsons Precision',
              'Jsons Industries'
            ].map((company) => (
              <div key={company} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">{company}</h3>
                <p className="text-gray-300 text-sm">Specialized manufacturing solutions</p>
              </div>
            ))}
          </div>
          
          <Link
            href="/admin"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Access CMS Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}