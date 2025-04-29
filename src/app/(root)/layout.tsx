


const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <h1>Shared Navbar</h1>
      {children}
      <h1>Shared Footer</h1>
    </>
  );
}

export default RootLayout;