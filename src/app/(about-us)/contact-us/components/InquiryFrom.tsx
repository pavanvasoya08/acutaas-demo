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
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Button from '@/components/ui/Button';
import { useState } from 'react';

const addUser = async () => {
  const res = await fetch('/api/add-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Harsh', role: 'Developer' }),
  });

  const data = await res.json();
  console.log('Inserted ID:', data.insertedId);
};

// Validation Schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  countryCode: z.string().min(1, 'Select a country code.'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 digits.')
    .max(15, 'Phone number must not exceed 15 digits.'),
  message: z.string().min(5, 'Message must be at least 5 characters.'),
});

const InquiryFrom: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      countryCode: '91',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const { agreePolicy, ...dataToSubmit } = values;

    console.log('Form Values:', values);
    // console.log('Data to submit:', dataToSubmit);

    const res = await fetch('/api/inquiry-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const data = await res.json();
  }

  const inputClass =
    'bg-transparent h-11 lg:h-[52px] border-0 border-b-[1px] border-[#8F7C7966] !text-base md:!text-lg lg:!text-xl placeholder:text-[#8F7C79] rounded-none';

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 md:gap-10 lg:gap-14 contact-form"
      >
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          {/* Your Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className={inputClass} placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" className={inputClass} placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormItem>
            <div className="flex items-start gap-4 md:gap-6 contact-page-number">
              {/* Country Code */}
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

              {/* Phone Number */}
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

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Your Messages"
                    className="bg-transparent h-24 md:h-28 lg:h-32 mt-[6px] border-0 border-b-[1px] border-[#8F7C7966] px-4 py-3 !text-base md:!text-lg lg:!text-xl rounded-none placeholder:text-[#8F7C79]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full mt-2">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default InquiryFrom;
