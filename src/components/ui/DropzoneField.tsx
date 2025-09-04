import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';

export default function DropzoneField({
  value,
  onChange,
}: {
  value?: File | null;
  onChange: (file: File | null) => void;
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
      }
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'min-h-[130px] flex flex-col items-center justify-center border-2 border-dashed p-[22px] cursor-pointer transition',
        isDragActive ? 'border-primary bg-primary/5' : 'border-[#BCB2B2] hover:border-primary/70'
      )}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <div className="w-5 md:w-6 flex-none">
            <img src="/images/file-upload-icon.svg" alt="file icon" />
          </div>
          <p className="text-[#8F7C79]">
            Drag and Drop your resume here or <span className="text-[#B03B23]">Choose file</span>
          </p>
        </div>

        {value && (
          <p className="text-[#8F7C79]">
            Selected: <span className="text-[#B03B23]">{value.name}</span>
          </p>
        )}
      </div>
    </div>
  );
}
