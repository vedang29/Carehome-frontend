import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Users, HeartHandshake, HelpingHand, ShieldCheck } from "lucide-react";

const AboutCard = () => {
  return (
    <div className="flex justify-between items-center gap-8 mt-10">
      {/* Community Card */}
      <Card className="h-98 border-yellow-100 border-2 shadow-lg rounded-lg flex flex-col justify-between">
        <CardHeader>
          <Users size={40} className="text-yellow-600" />
          <CardTitle>Our Community</CardTitle>
          <CardDescription>Building a strong and supportive environment.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            We believe in fostering a sense of belonging where everyone feels valued. Our mission is to ensure that each member has a voice and a place to thrive.
          </p>
        </CardContent>
        <CardFooter className="text-yellow-700 flex items-center gap-2">
          <HeartHandshake size={20} /> Join our mission
        </CardFooter>
      </Card>
      
      {/* Care & Support Card */}
      <Card className="h-98 border-blue-100 border-2 shadow-lg rounded-lg flex flex-col justify-between">
        <CardHeader>
          <HelpingHand size={40} className="text-blue-600" />
          <CardTitle>Care & Support</CardTitle>
          <CardDescription>Dedicated to providing compassionate care.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our trained caregivers provide personalized attention to ensure the well-being and comfort of all residents, promoting independence and dignity.
          </p>
        </CardContent>
        <CardFooter className="text-blue-700 flex items-center gap-2">
          <HeartHandshake size={20} /> Compassion in every step
        </CardFooter>
      </Card>
      
      {/* Safety & Trust Card */}
      <Card className="h-98 border-green-100 border-2 shadow-lg rounded-lg flex flex-col justify-between">
        <CardHeader>
          <ShieldCheck size={40} className="text-green-600" />
          <CardTitle>Safety & Trust</CardTitle>
          <CardDescription>Ensuring security and peace of mind.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our facilities are equipped with modern safety features, and our staff is trained to provide a secure and nurturing environment for all residents.
          </p>
        </CardContent>
        <CardFooter className="text-green-700 flex items-center gap-2">
          <HeartHandshake size={20} /> Trust in our care
        </CardFooter>
      </Card>
    </div>
  );
};

export default AboutCard;
