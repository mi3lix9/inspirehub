import { supabase } from "./supabase";

interface TeamMember {
  name: string;
  LinkedIn: string;
  photo: string;
  Twitter: string;
}

interface InsertProjectWithToolsAndTeamMembersParams {
  title: string;
  problem: string;
  motivation: string;
  solution: string;
  creatorID: string; // UUID is represented as a string in TypeScript
  image: File | null | undefined;
  description: string;
  category: string;
  tools: string;
  teamMembers: TeamMember[];
  budget: string;
  resources: string;
  others: string;
  currency: string;
}

export async function insertProject(
  params: InsertProjectWithToolsAndTeamMembersParams
) {
  const { data: project, error: perror } = await supabase
    .from("Project")
    .insert({
      CreatorID: params.creatorID,
      problem: params.problem,
      solution: params.solution,
      title: params.title,
      category: params.category,
      description: params.description,
      motivation: params.motivation,
      budget: params.budget,
      currency: params.currency,
      others: params.others,
      resources: params.resources,
    })
    .select()
    .single();

  if (params.image) {
    const { data, error } = await supabase.storage
      .from("projects")
      .upload(project!.id + "/proto.png", params.image);
    const url = supabase.storage.from("projects").getPublicUrl(data!.path);
    console.log(url);

    const { error: err } = await supabase
      .from("Project")
      .update({ image_url: url.data.publicUrl })
      .eq("id", project!.id);
    console.log({ err });
  }
  await supabase
    .from("Tools")
    .insert({ project_id: project?.id!, tool: params.tools });

  for (const member of params.teamMembers) {
    await supabase.from("TeamMembers").insert({
      project_id: project?.id!,
      name: member.name,
      Twitter: member.Twitter,
      LinkedIn: member.LinkedIn,
      photo: member.photo,
    });
  }
}
