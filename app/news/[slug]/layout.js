export default function NewDatailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children} {/* page.js on [slug] */} {/* current active page */}
    </>
  );
}
