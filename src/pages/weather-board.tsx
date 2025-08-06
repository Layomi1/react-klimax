import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCw } from "lucide-react";

export const WeatherBoard = () => {
  const { coordinates, error, getLocation, isLoading } = useGeolocation();
  console.log(coordinates);
  return (
    <div className="space-y-4">
      {/* <FavoriteCities/> */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={}
          //   disabled={}
          className="h-4 w-4"
        >
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
};
