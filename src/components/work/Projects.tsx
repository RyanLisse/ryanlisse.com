import { getPosts } from "@/utils/utils";
import { FrostedCard } from "./FrostedCard";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <div className={styles.grid}>
      {displayedProjects.map((post, index) => {
        // Simple logic for bento grid effect:
        // First item spans 2 columns if on desktop, others span 1.
        // You can adjust this logic for more complex patterns.
        const isFeatured = index === 0; 
        
        return (
          <div key={post.slug} className={isFeatured ? styles.span2 : styles.span1}>
            <FrostedCard
              priority={index < 2}
              href={`/work/${post.slug}`}
              image={post.metadata.images && post.metadata.images.length > 0 ? post.metadata.images[0] : ""}
              title={post.metadata.title}
              description={post.metadata.summary}
            />
          </div>
        );
      })}
    </div>
  );
}
