// src/components/FileUpload.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Button, Link } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload
    console.log(acceptedFiles);
    setUploadedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: 'application/pdf',
    noClick: true,
    noKeyboard: true
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #4a90e2',
        borderRadius: 1,
        p: 4,
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#e0f7fa',
        },
      }}
    >
      <input {...getInputProps()} />
      <CloudUploadIcon sx={{ fontSize: 50, color: '#4a90e2', mb: 2 }} />
      <Typography variant="h6" color="textSecondary">
        Drag & drop your CV here, or click to select files
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={open}
      >
        Browse Files
      </Button>

      {uploadedFiles.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="textSecondary">
            Uploaded Files:
          </Typography>
          {uploadedFiles.map((file, index) => (
            <Link key={index} href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
              {file.name}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
