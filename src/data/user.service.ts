import { Dictionary, User, users } from "./users.data";

export interface UserIdProps {
  userId: string;
}

export interface ExistProps extends UserIdProps {
  value: string;
}

export interface GetValuesProps extends UserIdProps {
  value: string;
}

export interface CreateAccessProps extends UserIdProps {
  access: Dictionary;
}

export interface UpdateAccessProps extends UserIdProps {
  key: string;
  newAccess: Partial<Dictionary>;
}

export interface DeleteAccessProps extends UserIdProps {
  value: string;
}

export interface ClearAccess extends  UserIdProps {

}


export class UserManager {
  static getUser(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }

  static existByType({ userId, value }: ExistProps): boolean {
    const user = this.getUser(userId);
    if (user) {
      const dictionary = user.access.find((dictionary) => dictionary.type === value);
      return dictionary !== undefined;
    }
    return false;
  }

  static existByKey({ userId, value }: ExistProps): boolean {
    const user = this.getUser(userId);
    if (user) {
      const dictionary = user.access.find((dictionary) => dictionary.key === value);
      return dictionary !== undefined;
    }
    return false;
  }

  static getValuesByType({ userId, value }: GetValuesProps): Dictionary[] {
    const user = this.getUser(userId);

    if (user) {
      return user.access.filter((item) => item.type === value);
    }
    return [];
  }

  static getValuesByKey({ userId, value }: GetValuesProps): Dictionary[] {
    const user = this.getUser(userId);

    if (user) {
      return user.access.filter((item) => item.key === value);
    }
    return [];
  }

  static createAccess({ userId, access }: CreateAccessProps): void {
    const user = users.find((user) => user.id === userId);
    if (user) {
      user.access.push(access);
    } else {
      throw new Error("User not found");
    }
  }
  static updateAccess({ userId, key, newAccess }: UpdateAccessProps): void {
    const user = users.find((user) => user.id === userId);
    if (user) {
      const access = user.access.find((access) => access.key === key);
      if (access) {
        user.access = user.access.map((acc) => (acc.key === key ? { ...acc, ...newAccess } : acc));
      } else {
        throw new Error("Access not found");
      }
    } else {
      throw new Error("User not found");
    }
  }

  static deleteAccessByKey({ userId, value }: DeleteAccessProps): void {
    const user = users.find((user) => user.id === userId);
    if (user) {
      user.access = user.access.filter((access) => access.key !== value);
    } else {
      console.log("Usuario no encontrado");
    }
  }

  static deleteAccessByType({ userId, value }: DeleteAccessProps): void {
    const user = users.find((user) => user.id === userId);
    if (user) {
      user.access = user.access.filter((access) => access.type !== value);
    } else {
      console.log("Usuario no encontrado");
    }
  }

  static clearAccess({ userId }: ClearAccess): void {
    const user = users.find((user) => user.id === userId);
    if (user) {
      user.access = []
    } else {
      console.log("Usuario no encontrado");
    }
  }

  static viewTokens(): void {
    users.forEach((item) => {
      const tokens = item.access.filter((acc) => acc.type.toLowerCase() === "token");

      if (tokens.length > 0) {
        console.log({ id: item.id, username: item.username });
        console.table(tokens.map((row) => ({ key: row.key, value: row.value })));
      } else {
        console.log("token container []");
      }
    });
  }

  static viewCodes(): void {
    users.forEach((item) => {
      const tokens = item.access.filter((acc) => acc.type.toLowerCase() === "code");

      if (tokens.length > 0) {
        console.log({ id: item.id, username: item.username });
        console.table(tokens.map((row) => ({ key: row.key, value: row.value })));
      } else {
        console.log("token container []");
      }
    });
  }
}
