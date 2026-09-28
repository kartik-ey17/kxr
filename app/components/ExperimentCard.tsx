type ExperimentCardProps = {
    title: string;
    category: string;
    description: string;
};

export default function ExperimentCard({
    title,
    category,
    description,
}: ExperimentCardProps) {
    return(
        <div className="aspect-square rounded-md border p-5 transition-all hover:-translate-y-1 hover:border-white/60">
            <h2 className="text-x1 font-semibold">
                {title}
            </h2>
            <p className="mt-2 text-sm opacity-60">
                {category}
            </p>
            <p className="mt-2 text-sm opacity-80">
                {description}
            </p>
        </div>
    );
}