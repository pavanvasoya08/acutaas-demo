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

// const addUser = async () => {
//   const res = await fetch('/api/add-user', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'Harsh', role: 'Developer' }),
//   });

//   const data = await res.json();
//   console.log('Inserted ID:', data.insertedId);
// };

// Validation Schema
const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  countryCode: z.string().min(1, 'Select a country code.'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 digits.')
    .max(15, 'Phone number must not exceed 15 digits.'),
  message: z.string().min(5, 'Message must be at least 5 characters.'),
  agreePolicy: z.boolean().refine((val) => val === true, 'You must agree to the policy.'),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '+91',
      phone: '',
      message: '',
      agreePolicy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { agreePolicy, ...dataToSubmit } = values;

    console.log('Form Values:', values);
    console.log('Data to submit:', dataToSubmit);

    const res = await fetch('/api/add-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSubmit),
    });

    const data = await res.json();
    console.log('Inserted ID:', data.insertedId);
  }

  const inputClass =
    'rounded-[6px] mt-[6px] border-[#BCB2B2] placeholder:text-[#BCB2B2] px-4 py-3 h-10 text-sm md:text-base md:h-12';

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 sm:gap-6 contact-form"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal text-[#231F20]">First Name</FormLabel>
                <FormControl>
                  <Input className={inputClass} placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal text-[#231F20]">Last Name</FormLabel>
                <FormControl>
                  <Input className={inputClass} placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-normal text-[#231F20]">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormItem>
          <FormLabel className="text-sm font-normal text-[#231F20]">Phone Number</FormLabel>
          <div className="flex rounded-[6px] border border-[#BCB2B2] h-10 md:h-12 phone-number">
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
                    console.log(data);
                  }}
                  enableSearch
                  disableCountryCode={true}
                  disableDropdown={false}
                  inputStyle={{
                    width: '38px',
                    height: '38px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                  }}
                  buttonStyle={{
                    border: 'none',
                    background: 'transparent',
                  }}
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
                    <input
                      type="tel"
                      className="w-full px-4 outline-none border-l border-[#BCB2B2] placeholder:text-[#BCB2B2] rounded-r-[6px] h-full text-sm md:text-base"
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
              <FormLabel className="text-sm font-normal text-[#231F20]">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="rounded-[6px] h-32 mt-[6px] border-[#BCB2B2] placeholder:text-[#BCB2B2] px-4 py-3 text-sm md:text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Agree to Policy */}
        <FormField
          control={form.control}
          name="agreePolicy"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3">
              <FormControl>
                <Checkbox
                  className="w-5 h-5 border-[#BCB2B2] rounded-[6px]"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="leading-none text-base text-[#8F7C79]">
                <FormLabel>You agree to our friendly privacy policy.</FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-2">
          Send Message
        </Button>
      </form>
    </Form>
  );
}
