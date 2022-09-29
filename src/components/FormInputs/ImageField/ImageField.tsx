import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  useField
} from 'react-final-form';

type Props = { name: string }
const ImageField: FC<Props> = ({ name }) => {
  const { input: { value, onChange } } = useField(name)


  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='h-10 w-full bg-accents-6 rounded-lg shadow-sm'>
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      </div>

    </div>
  );
};

export default ImageField;
