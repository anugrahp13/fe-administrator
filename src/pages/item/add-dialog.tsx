import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Save } from "lucide-react";

// Schema Validasi dengan zod
const formSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  category: z.string().min(1, "Kategori harus diisi"),
  stock: z.coerce.number().min(0, "Stok harus diisi"),
  buyPrice: z.coerce.number().min(0, "Harga beli harus diisi"),
  sellPrice: z.coerce.number().min(0, "Harga jual harus diisi"),
  image: z.string().url("Gambar harus diisi"),
});

// Props
interface AddDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function AddDialog({
  isOpen,
  onClose,
  onSubmit,
}: AddDialogProps) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      stock: 0,
      buyPrice: 0,
      sellPrice: 0,
      image: "",
    },
  });

  // Handle Submit
  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    onClose(); // Tutup modal setelah submit
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Barang</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {/* Gambar */}
              <FormField
                control={form.control}
                name="image"
                render={({ field: { onChange, ...rest } }) => (
                  <FormItem>
                    <div className="flex justify-between items-center gap-2">
                      <FormLabel htmlFor="image">Gambar</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => onChange(e.target.files?.[0])}
                        {...rest}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Nama */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center gap-2">
                      <FormLabel htmlFor="name">Nama</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input placeholder="Nama Barang" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Kategori */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center gap-2">
                      <FormLabel htmlFor="category">Kategori</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input placeholder="Kategori Barang" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Stok */}
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center gap-2">
                      <FormLabel htmlFor="stock">Stok</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Harga Jual */}
              <FormField
                control={form.control}
                name="sellPrice"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center gap-2">
                      <FormLabel htmlFor="sellPrice">Harga Jual</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Harga Beli */}
              <FormField
                control={form.control}
                name="buyPrice"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center gap-2">
                      <FormLabel htmlFor="buyPrice">Harga Beli</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Tombol Submit */}
            <DialogFooter>
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                <Save />
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
