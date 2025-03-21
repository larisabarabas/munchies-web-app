export default function RestaurantsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="bg-munchies-white-off pl-10 pt-14 min-h-screen">{children}</section>
  }