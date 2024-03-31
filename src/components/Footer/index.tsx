export default function Footer() {
  return (
    <footer className="bg-base-200 font-sans">
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-12 gap-5 py-16">
            Footer Column 1
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-content/10">
          Footer Column 2
        </div>
      </div>
    </footer>
  );
}
