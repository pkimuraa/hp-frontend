import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { useFavoriteStore } from "@/services/store/useFavoriteStore";
import { CharacterInfos } from "../CharacterInfos";
import { WizardCharacter } from "@/utils/types";
import "@testing-library/jest-dom";

vi.mock("@/services/store/useFavoriteStore", () => ({
  useFavoriteStore: vi.fn(),
}));

describe("CharacterInfos", () => {
  const mockCharacter: WizardCharacter = {
    id: "1",
    name: "Harry Potter",
    alternate_names: ["The Boy Who Lived"],
    wizard: true,
    ancestry: "Half-Blood",
    house: "Gryffindor",
    alive: true,
    hogwartsStudent: true,
    patronus: "Stag",
    dateOfBirth: "31/07/1980",
    actor: "Daniel Radcliffe",
    wand: {
      wood: "Holly",
      core: "Phoenix feather",
      length: 11,
    },
    species: "human",
    gender: "male",
    yearOfBirth: 1980,
    eyeColour: "green",
    hairColour: "brown",
    hogwartsStaff: false,
    alternate_actors: ["Daniel Radcliffe"],
    image: "",
  };

  beforeEach(() => {
    (useFavoriteStore as any).mockReturnValue({
      favorites: [],
      addFavorite: vi.fn(),
      removeFavorite: vi.fn(),
    });
  });

  it("renders character information correctly", () => {
    render(<CharacterInfos character={mockCharacter} />);

    expect(screen.getByText(/Harry Potter/i)).toBeInTheDocument();
    expect(screen.getByText(/The Boy Who Lived/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizard, Half-Blood/i)).toBeInTheDocument();
    expect(screen.getByText(/Gryffindor/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Student/i)).toBeInTheDocument();
    expect(screen.getByText(/Stag/i)).toBeInTheDocument();
    expect(screen.getByText(/31\/07\/1980/i)).toBeInTheDocument();
    expect(screen.getByText(/Daniel Radcliffe/i)).toBeInTheDocument();
  });

  it("renders without crashing for undefined character", () => {
    render(<CharacterInfos character={undefined} />);
    expect(screen.queryByText(/Harry Potter/i)).not.toBeInTheDocument();
  });

  it("renders without crashing for null character", () => {
    render(<CharacterInfos character={undefined} />);
    expect(screen.queryByText(/Harry Potter/i)).not.toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<CharacterInfos character={mockCharacter} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
