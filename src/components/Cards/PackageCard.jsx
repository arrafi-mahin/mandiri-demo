/**
 * PackageCard Component
 *
 * This component renders a card that displays an icon and a title,
 * typically used for showcasing different banking packages. The card has
 * a gradient background and includes a hover effect that changes the gradient.
 *
 * Props:
 * - `icon`: (Unused) Can be used to pass an icon component or image,
 *            though in this implementation, it is not being utilized.
 * - `title`: A string that represents the title of the card,
 *            displayed at the bottom of the card.
 * - `children`: The content (usually an SVG icon) that is rendered
 *               at the top section of the card.
 *
 * The card is styled to be responsive and visually appealing,
 * with transitions and hover effects that enhance user interaction.
 *
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The rendered PackageCard component.
 */
export default function PackageCard({ title, children }) {
  return (
    <div className="scale-[1] rounded-[2.5rem] bg-gradient-to-r from-[#fffafa] to-[#cae6fa] hover:from-[#9ed7ff41] hover:to-[#FFFFFF30] group transition ease-in-out delay-75 duration-700 pb-10 pt-12 flex flex-col items-center justify-between w-full gap-14 max-w-[280px] h-[280px] shadow-xl">
      <div className="poppins-light">{children}</div>
      <h3 className="text-2xl text-blue font-bold whitespace-nowrap">
        {title}
      </h3>
    </div>
  );
}
