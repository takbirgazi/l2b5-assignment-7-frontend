import { Card, CardContent } from "@/components/ui/card"

const feedbacks = [
    { id: 1, name: "John Doe", text: "Amazing work, very professional!" },
    { id: 2, name: "Sarah Lee", text: "Delivered on time with great quality." },
    { id: 3, name: "David Kim", text: "Fantastic design and clean code!" },
]

export default function Feedback() {
    return (
        <section className="py-16 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Client Feedback</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {feedbacks.map(feed => (
                    <Card key={feed.id} className="hover:shadow-md transition">
                        <CardContent className="p-6">
                            <p className="text-muted-foreground mb-4">&ldquo;{feed.text}&ldquo;</p>
                            <h4 className="font-semibold">{feed.name}</h4>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
};