import { Button } from '@/components/ui/button';
import React from 'react';

const UserPage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#0f172a] to-[#83a4d8]">
      <h1 className="text-4xl font-bold text-center text-white bg-[var(--color-gray-50))]">This is user page</h1>
      <div className='flex flex-col space-y-4!'>
        <div>
          <h1>Hlw</h1>
          <Button variant="success" size={"lg"}>Success</Button>
        </div>
        <div>
          <h1>Hlw</h1>
          <Button variant="warning" size={"lg"}>Warning</Button>
        </div>
        <div>
          <h1>Hlw</h1>
          <Button variant="dangerOutline" size={"lg"}>Danger Outline</Button>
        </div>
        <div>
          <h1>Hlw</h1>
          <Button variant="subtle" size={"lg"}>Subtle</Button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;