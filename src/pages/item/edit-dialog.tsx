import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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

import { DataItem } from "@/data/dataItem";

const formSchema = z.object({
  image: z.string().min(1, "Gambar harus diisi"),
  name: z.string().min(1, "Nama harus diisi"),
  category: z.string().min(1, "Kategori harus diisi"),
  stock: z.coerce.number().min(0, "Stok harus diisi"),
  sellPrice: z.coerce.number().min(0, "Harga Jual harus diisi"),
  buyPrice: z.coerce.number().min(0, "Harga Beli harus diisi"),
});

interface EditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  item: DataItem | null;
  onSave: (data: DataItem) => void;
}

export default function EditDialog({
  isOpen,
  onClose,
  item,
  onSave,
}: EditDialogProps) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: item?.image || "",
      name: item?.name || "",
      category: item?.category || "",
      stock: item?.stock !== undefined ? Number(item.stock) : 0,
      buyPrice: item?.buyPrice !== undefined ? Number(item.buyPrice) : 0,
      sellPrice: item?.sellPrice !== undefined ? Number(item.sellPrice) : 0,
    },
  });

  const onSubmit = (data: any) => {
    onSave({ ...item, ...data });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[60rem]">
        <DialogHeader>
          <DialogTitle>Edit Barang</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                      <Input id="name" placeholder="Nama Barang" {...field} />
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
                      <Input
                        id="category"
                        placeholder="Kategori Barang"
                        {...field}
                      />
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
                      <Input id="stock" type="number" {...field} />
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
                      <Input id="sellPrice" type="number" {...field} />
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
                      <Input id="buyPrice" type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Tombol Submit */}
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
