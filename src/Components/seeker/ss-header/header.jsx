import "./header.css";

export default function SeekerSectionHeader({ header, paragraph }) {
  return (
    <span className="seeker-ss-conts-header">
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </span>
  );
}
