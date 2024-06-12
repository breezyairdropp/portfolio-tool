import { Button } from '@/components/ui/button';
import Image from 'next/image';

export async function User() {

    let user = "";

  return (
    <div className="flex items-center gap-4">
      <form
        action={async () => {
          'use server';
        //   await signOut();
        }}
      >
        <Button variant="outline">Sign Out</Button>
      </form>
      <Image
        className="h-8 w-8 rounded-full"
        src={user?.image!}
        height={32}
        width={32}
        alt={`${user?.name} avatar`}
      />
    </div>
  );
}
