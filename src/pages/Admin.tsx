
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2, Edit } from 'lucide-react';

interface Merchandise {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
}

interface Belt {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  championship_level: string;
  is_available: boolean;
}

interface Document {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_name: string;
  file_size: number;
  is_featured: boolean;
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState('merchandise');
  const [editingItem, setEditingItem] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch data
  const { data: merchandise, isLoading: merchandiseLoading } = useQuery({
    queryKey: ['merchandise'],
    queryFn: async () => {
      const { data, error } = await supabase.from('merchandise').select('*');
      if (error) throw error;
      return data as Merchandise[];
    }
  });

  const { data: belts, isLoading: beltsLoading } = useQuery({
    queryKey: ['belts'],
    queryFn: async () => {
      const { data, error } = await supabase.from('belts').select('*');
      if (error) throw error;
      return data as Belt[];
    }
  });

  const { data: documents, isLoading: documentsLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      const { data, error } = await supabase.from('documents').select('*');
      if (error) throw error;
      return data as Document[];
    }
  });

  // Mutations
  const addMerchandise = useMutation({
    mutationFn: async (item: Omit<Merchandise, 'id'>) => {
      const { data, error } = await supabase.from('merchandise').insert([item]).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['merchandise'] });
      toast({ title: "Merchandise added successfully!" });
    }
  });

  const updateMerchandise = useMutation({
    mutationFn: async ({ id, ...item }: Merchandise) => {
      const { data, error } = await supabase.from('merchandise').update(item).eq('id', id).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['merchandise'] });
      toast({ title: "Merchandise updated successfully!" });
      setEditingItem(null);
    }
  });

  const deleteMerchandise = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('merchandise').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['merchandise'] });
      toast({ title: "Merchandise deleted successfully!" });
    }
  });

  const addBelt = useMutation({
    mutationFn: async (item: Omit<Belt, 'id'>) => {
      const { data, error } = await supabase.from('belts').insert([item]).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['belts'] });
      toast({ title: "Belt added successfully!" });
    }
  });

  const updateBelt = useMutation({
    mutationFn: async ({ id, ...item }: Belt) => {
      const { data, error } = await supabase.from('belts').update(item).eq('id', id).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['belts'] });
      toast({ title: "Belt updated successfully!" });
      setEditingItem(null);
    }
  });

  const deleteBelt = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('belts').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['belts'] });
      toast({ title: "Belt deleted successfully!" });
    }
  });

  const addDocument = useMutation({
    mutationFn: async (item: Omit<Document, 'id'>) => {
      const { data, error } = await supabase.from('documents').insert([item]).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({ title: "Document added successfully!" });
    }
  });

  const updateDocument = useMutation({
    mutationFn: async ({ id, ...item }: Document) => {
      const { data, error } = await supabase.from('documents').update(item).eq('id', id).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({ title: "Document updated successfully!" });
      setEditingItem(null);
    }
  });

  const deleteDocument = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('documents').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({ title: "Document deleted successfully!" });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (type === 'merchandise') {
      const item = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string),
        image_url: formData.get('image_url') as string,
        category: formData.get('category') as string,
        is_featured: formData.get('is_featured') === 'on'
      };
      
      if (editingItem) {
        updateMerchandise.mutate({ id: editingItem.id, ...item });
      } else {
        addMerchandise.mutate(item);
      }
    } else if (type === 'belts') {
      const item = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string),
        image_url: formData.get('image_url') as string,
        championship_level: formData.get('championship_level') as string,
        is_available: formData.get('is_available') === 'on'
      };
      
      if (editingItem) {
        updateBelt.mutate({ id: editingItem.id, ...item });
      } else {
        addBelt.mutate(item);
      }
    } else if (type === 'documents') {
      const item = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        file_url: formData.get('file_url') as string,
        file_name: formData.get('file_name') as string,
        file_size: parseInt(formData.get('file_size') as string) || 0,
        is_featured: formData.get('is_featured') === 'on'
      };
      
      if (editingItem) {
        updateDocument.mutate({ id: editingItem.id, ...item });
      } else {
        addDocument.mutate(item);
      }
    }
    
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-red-500">ADMIN</span> PANEL
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Manage merchandise, belts, and documents
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger value="merchandise" className="data-[state=active]:bg-red-600">
              Merchandise
            </TabsTrigger>
            <TabsTrigger value="belts" className="data-[state=active]:bg-red-600">
              Belts
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-red-600">
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="merchandise" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-500">
                  {editingItem ? 'Edit Merchandise' : 'Add New Merchandise'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'merchandise')} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue={editingItem?.name || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        defaultValue={editingItem?.price || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        name="category"
                        defaultValue={editingItem?.category || 'merch'}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image_url">Image URL</Label>
                      <Input
                        id="image_url"
                        name="image_url"
                        defaultValue={editingItem?.image_url || ''}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      defaultValue={editingItem?.description || ''}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_featured"
                      name="is_featured"
                      defaultChecked={editingItem?.is_featured || false}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="is_featured">Featured</Label>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      {editingItem ? 'Update' : 'Add'} Merchandise
                    </Button>
                    {editingItem && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingItem(null)}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {merchandiseLoading ? (
              <div className="flex justify-center">
                <Loader2 className="animate-spin text-red-500" size={48} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {merchandise?.map((item) => (
                  <Card key={item.id} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-red-500 mb-2">{item.name}</h3>
                      <p className="text-gray-300 mb-2">${item.price}</p>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingItem(item)}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteMerchandise.mutate(item.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="belts" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-500">
                  {editingItem ? 'Edit Belt' : 'Add New Belt'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'belts')} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue={editingItem?.name || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        defaultValue={editingItem?.price || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="championship_level">Championship Level</Label>
                      <Input
                        id="championship_level"
                        name="championship_level"
                        defaultValue={editingItem?.championship_level || ''}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image_url">Image URL</Label>
                      <Input
                        id="image_url"
                        name="image_url"
                        defaultValue={editingItem?.image_url || ''}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      defaultValue={editingItem?.description || ''}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_available"
                      name="is_available"
                      defaultChecked={editingItem?.is_available !== false}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="is_available">Available</Label>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      {editingItem ? 'Update' : 'Add'} Belt
                    </Button>
                    {editingItem && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingItem(null)}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {beltsLoading ? (
              <div className="flex justify-center">
                <Loader2 className="animate-spin text-red-500" size={48} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {belts?.map((item) => (
                  <Card key={item.id} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-red-500 mb-2">{item.name}</h3>
                      <p className="text-gray-300 mb-2">${item.price}</p>
                      <p className="text-yellow-400 mb-2">{item.championship_level}</p>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingItem(item)}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteBelt.mutate(item.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-500">
                  {editingItem ? 'Edit Document' : 'Add New Document'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'documents')} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        defaultValue={editingItem?.title || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="file_name">File Name</Label>
                      <Input
                        id="file_name"
                        name="file_name"
                        defaultValue={editingItem?.file_name || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="file_url">File URL</Label>
                      <Input
                        id="file_url"
                        name="file_url"
                        defaultValue={editingItem?.file_url || ''}
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="file_size">File Size (bytes)</Label>
                      <Input
                        id="file_size"
                        name="file_size"
                        type="number"
                        defaultValue={editingItem?.file_size || ''}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      defaultValue={editingItem?.description || ''}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_featured"
                      name="is_featured"
                      defaultChecked={editingItem?.is_featured || false}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="is_featured">Featured</Label>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      {editingItem ? 'Update' : 'Add'} Document
                    </Button>
                    {editingItem && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingItem(null)}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {documentsLoading ? (
              <div className="flex justify-center">
                <Loader2 className="animate-spin text-red-500" size={48} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents?.map((item) => (
                  <Card key={item.id} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-red-500 mb-2">{item.title}</h3>
                      <p className="text-gray-300 mb-2">{item.file_name}</p>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingItem(item)}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteDocument.mutate(item.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
