# Project Architecture

- Homepage campaign storytelling lives in focused section components, while `Index.tsx` controls their sequence; this keeps the long Kickstarter page maintainable.
- Campaign media is stored as Lovable Asset pointers under `src/assets/campaign`; this keeps uploaded binary files out of the repository.
