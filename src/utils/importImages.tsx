type ImageImports = Record<string, { default: string }>;

const importAll = (r: ImageImports): string[] => {
  return Object.values(r).map((module) => module.default);
};

const importImages = (path: string): string[] => {
  switch (path) {
    case "projectPreview":
      return importAll(
        import.meta.glob<{ default: string }>(
          "../assets/projectPreview/*.{png,jpg,jpeg,svg,gif}",
          { eager: true },
        ),
      );
    default:
      return [];
  }
};

export default importImages;
