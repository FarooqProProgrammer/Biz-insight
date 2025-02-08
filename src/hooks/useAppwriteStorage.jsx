import { useState } from "react";
import { ID } from "appwrite";
import { storage } from "@/lib/appwrite";



const useAppwriteStorage = (bucketId) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const uploadFile = async (file) => {
    if (!file) {
      setError("No file selected");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const response = await storage.createFile(bucketId, ID.unique(), file);
      const fileId = response.$id;
      
      const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/view?project=67a73d6a0032196941a3`;
      setFileUrl(fileUrl);
      return response;
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading, error, fileUrl };
};

export default useAppwriteStorage;
