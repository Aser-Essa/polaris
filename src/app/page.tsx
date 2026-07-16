"use client";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.get);

  const createProject = useMutation(api.projects.create);

  return (
    <div>
      <Button
        onClick={() =>
          createProject({
            name: `Polaris Project ${Math.floor(Math.random() * 100)}`,
          })
        }
      >
        Add project
      </Button>

      {projects?.map((project) => (
        <div key={project._id}>
          <div>{project.name}</div>
          <div>{project.ownerId}</div>
        </div>
      ))}
    </div>
  );
}
