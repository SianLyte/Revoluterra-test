import { useState } from "react";

export const usePhoto = () => {
  const [photos, setPhotos] = useState<File[]>([]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const newPhotos = Array.from(event.target.files);
    if (photos.length + newPhotos.length <= 10) {
      setPhotos((prev) => [...prev, ...newPhotos]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const addPhotosToFormData = (formData: FormData) => {

    const filteredFiles = formData.getAll("photos");
    filteredFiles.forEach(file => {
      if (file instanceof File)
        formData.delete("photos");
    })

    photos.forEach((photo, index) => {
      formData.append("photos", photo, photo.name)
    })

  }

  return { photos, setPhotos, handlePhotoUpload, removePhoto, addPhotosToFormData }
}