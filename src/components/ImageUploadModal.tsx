import React, { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (url: string, description: string) => void;
};

const ImageUploadModal: React.FC<Props> = ({ open, onClose, onSave }) => {
  const [url, setUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }

    return true;
  };

  const handleSave = () => {
    if (url && isValidUrl(url)) {
      onSave(url, description);
      onClose();
    } else {
      alert('Please enter a valid URL');
    }
  };

  return (
    <Modal open={open} onClose={onClose} className="modal fixed inset-0 flex items-center justify-center z-50">
      <Box className=" bg-background-inverse rounded-lg p-8 mx-4 md:mx-0 max-w-md w-full relative z-10">
        <TextField label="Image URL (copy from Midjourney)" value={url} onChange={handleUrlChange} className="mb-8 w-full" />
        <TextField label="Prompt" value={description} onChange={handleDescriptionChange} className="mb-8 w-full" />
        <Button onClick={handleSave} className="mt-4">Save</Button>
      </Box>
    </Modal>
  );
};

export default ImageUploadModal;
