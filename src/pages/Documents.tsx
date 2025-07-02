
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Download, Loader2 } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_name: string;
  file_size: number;
  is_featured: boolean;
  created_at: string;
}

const Documents = () => {
  const { data: documents, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Document[];
    }
  });

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDownload = (url: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-red-500">DOCUMENT</span> SHOWCASE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access exclusive PDFs, guides, and wrestling resources
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-red-500" size={48} />
          </div>
        ) : documents && documents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <FileText size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-500 mb-2">{doc.title}</h3>
                    {doc.description && (
                      <p className="text-gray-300 mb-4">{doc.description}</p>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                      <span>{doc.file_name}</span>
                      {doc.file_size && <span>{formatFileSize(doc.file_size)}</span>}
                    </div>
                    <button
                      onClick={() => handleDownload(doc.file_url, doc.file_name)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center space-x-2"
                    >
                      <Download size={16} />
                      <span>DOWNLOAD PDF</span>
                    </button>
                  </div>
                </div>
                {doc.is_featured && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-xl">No documents available yet</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Documents;
