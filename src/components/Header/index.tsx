export function Header() {
  return (
    <header className="px-3 w-full h-72 relative">
      <div className="h-60 w-60 bg-background-banner rounded-full absolute -top-24 -left-24 blur-3xl"></div>
      <div className="h-60 w-60 bg-background-banner rounded-full absolute -top-24 -right-24 blur-3xl"></div>
      <div className="h-10 -z-10 container mx-auto bg-background-banner absolute bottom-0 blur-3xl inset-x-0"></div>
    </header>
  );
}