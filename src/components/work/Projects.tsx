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
        // Masonry height variation pattern
        const heightClass =
          index % 5 === 0 ? styles.tall :
          index % 5 === 1 || index % 5 === 3 ? styles.medium :
          styles.short;

        return (
          <div key={post.slug} className={heightClass}>
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
