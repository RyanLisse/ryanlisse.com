"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, Text } from "@once-ui-system/core";
import styles from "./FrostedCard.module.scss";

interface FrostedCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  priority?: boolean;
}

export const FrostedCard: React.FC<FrostedCardProps> = ({
  href,
  image,
  title,
  description,
  priority = false,
}) => {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageContainer}>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className={styles.content}>
        <Heading as="h3" variant="heading-strong-l">
          {title}
        </Heading>
        {description && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}
      </div>
    </Link>
  );
};
