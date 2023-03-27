import react from "react";
import { Button, Typography } from "../../components";

const header =
  "https://tourscanner.com/blog/wp-content/uploads/2022/05/Angkor-Wat-at-sunrise-Siem-Reap.jpg";
const ProvinceDetail = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(0, #0A2647 0%, rgba(0, 0, 0, 0) 50%), url(${header})`,
        }}
        className="h-screen w-full bg-center bg-cover flex"
      >
        <div className="w-[600px] mt-auto">
          <Typography variant="display">Siem Reap</Typography>
          <Typography className="mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nisl felis, elementum ut imperdiet vel, mattis eu nunc. Curabitur
            non lectus ligula. Quisque mattis ultricies sapien, a iaculis enim
            accumsan eu. Nam vel lorem in turpis imperdiet egestas sed vel
            massa. Proin maximus laoreet sem, non varius velit cursus quis.
          </Typography>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
};

export default ProvinceDetail;
