'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Button from '@/components/ui/Button';
import DropzoneField from '@/components/ui/DropzoneField';
import { useState } from 'react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  countryCode: z.string().min(1, 'Select a country code.'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 digits.')
    .max(15, 'Phone number must not exceed 15 digits.'),
  linkedinUrl: z.string().url('Enter a valid LinkedIn profile URL.'),
  resume: z
    .instanceof(File, { message: 'Resume file is required.' })
    .refine(
      (file) =>
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(file.type),
      'Only PDF or DOC/DOCX files are allowed.'
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, 'File size must be under 5MB.'),
});

const InquiryForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '91',
      phone: '',
      linkedinUrl: '',
      resume: null as unknown as File,
    },
  });

  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'resume' && value instanceof File) {
        formData.append('resume', value);
      } else {
        formData.append(key, value as string);
      }
    });

    const res = await fetch('/api/inquiry-form', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    console.log('Response:', data);
  }

  const inputClass =
    'font-medium bg-transparent h-11 lg:h-[52px] border-0 border-b-[1px] border-[#8F7C7966] !text-base md:!text-lg lg:!text-xl placeholder:text-[#8F7C79] rounded-none';

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 md:gap-10 lg:gap-14 items-center contact-form"
      >
        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className={inputClass} placeholder="First Name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className={inputClass} placeholder="Last Name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" className={inputClass} placeholder="Your Email*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <div className="flex items-start gap-4 md:gap-6 contact-page-number">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <PhoneInput
                    country={'in'}
                    value={field.value}
                    onChange={(data) => {
                      form.setValue('countryCode', `+${data}`, { shouldValidate: true });
                    }}
                    enableSearch
                    disableCountryCode={true}
                    disableDropdown={false}
                    inputStyle={{
                      border: 'none',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                    buttonStyle={{
                      border: 'none',
                      background: 'transparent',
                    }}
                    inputClass="!h-11 !w-16 lg:!h-[51px] md:!w-[112px]"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        type="tel"
                        className={inputClass}
                        placeholder="55500 00000"
                        value={field.value}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, '');
                          if (digitsOnly.length <= 15) {
                            field.onChange(digitsOnly);
                          }
                        }}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FormItem>

          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className={inputClass} placeholder="LinkedIn Profile URL*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-y-3 md:gap-y-5 py-1.5 md:py-2.5">
                <FormLabel className="text-base md:text-lg lg:text-xl !leading-[1.1] font-medium text-[#8F7C79]">
                  Upload Your Resume
                </FormLabel>
                <FormControl>
                  <DropzoneField
                    value={field.value}
                    onChange={(file: File | null) => field.onChange(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="ml-auto max-w-[166px] w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default InquiryForm;
