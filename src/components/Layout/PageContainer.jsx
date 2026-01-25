function PageContainer({ title, children }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {title && (
          <h1 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">
            {title}
          </h1>
        )}
        {children}
      </div>
    </main>
  );
}

export default PageContainer;
