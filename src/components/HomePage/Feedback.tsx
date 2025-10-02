import { Quote } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

function Feedback() {
    const feedbacks = [
        { id: 1, name: "John Doe", role: "Product Manager", text: "Amazing work, very professional! Takbir delivered beyond expectations." },
        { id: 2, name: "Sarah Lee", role: "Startup Founder", text: "Delivered on time with great quality. Highly recommended!" },
        { id: 3, name: "David Kim", role: "Tech Lead", text: "Fantastic design and clean code! A pleasure to work with." },
    ]

    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">
                        <Quote className="w-4 h-4 mr-2" />
                        Testimonials
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Don&apos;t just take my word for it - hear from some of my satisfied clients
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {feedbacks.map((feed) => (
                        <Card key={feed.id} className="hover:shadow-xl transition-all border-2 hover:border-primary">
                            <CardContent className="p-6">
                                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                <p className="text-muted-foreground mb-6 italic">{feed.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                        {feed.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{feed.name}</h4>
                                        <p className="text-sm text-muted-foreground">{feed.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feedback;