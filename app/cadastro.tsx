import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Svg, { Rect, Line, Path, Circle, G } from "react-native-svg";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const PARCHMENT = "#F5EDD6";
const PARCHMENT2 = "#EDE0C0";
const INK = "#2C1A0E";
const SEPIA = "#7A4E2D";
const SEPIA_LIGHT = "#B8894A";
const SEPIA_DIM = "#C9A86C";
const PAD = 15;

type CornerProps = { flipX?: boolean; flipY?: boolean };

const CornerOrnament = ({ flipX = false, flipY = false }: CornerProps) => {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  const tx = flipX ? -48 : 0;
  const ty = flipY ? -48 : 0;

  return (
    <Svg width={48} height={48} viewBox="0 0 48 48">
      <G transform={`scale(${sx},${sy}) translate(${tx},${ty})`}>
        <Rect
          x="22"
          y="22"
          width="24"
          height="24"
          fill="none"
          stroke={SEPIA_LIGHT}
          strokeWidth="1.2"
        />
        <Rect
          x="12"
          y="12"
          width="22"
          height="22"
          fill="none"
          stroke={SEPIA}
          strokeWidth="1.4"
        />
        <Rect
          x="2"
          y="2"
          width="20"
          height="20"
          fill={PARCHMENT}
          stroke={INK}
          strokeWidth="1.8"
        />
        <Circle cx="12" cy="12" r="1.5" fill={SEPIA} />
      </G>
    </Svg>
  );
};

function DecorativeFrame({
  topInset,
  bottomInset,
}: {
  topInset: number;
  bottomInset: number;
}) {
  const W = width;
  const H = height;
  const O = PAD + 48;
  const M = PAD + topInset * 0.08;

  const topY = M + topInset;
  const bottomY = H - (PAD + 22 + bottomInset);
  const leftX = PAD + 14;
  const rightX = W - (PAD + 14);

  return (
    <Svg
      width={W}
      height={H}
      style={StyleSheet.absoluteFillObject}
      pointerEvents="none"
    >
      <Line
        x1={O}
        y1={topY}
        x2={W - O}
        y2={topY}
        stroke={INK}
        strokeWidth="1"
        opacity={0.6}
      />
      <Line
        x1={O}
        y1={topY + 5}
        x2={W - O}
        y2={topY + 5}
        stroke={SEPIA_DIM}
        strokeWidth="0.5"
        opacity={0.5}
      />

      <Line
        x1={O}
        y1={bottomY}
        x2={W - O}
        y2={bottomY}
        stroke={INK}
        strokeWidth="1"
        opacity={0.6}
      />
      <Line
        x1={O}
        y1={bottomY - 5}
        x2={W - O}
        y2={bottomY - 5}
        stroke={SEPIA_DIM}
        strokeWidth="0.5"
        opacity={0.5}
      />

      <Line
        x1={leftX}
        y1={PAD + 48 + topInset}
        x2={leftX}
        y2={H - (PAD + 48 + bottomInset)}
        stroke={INK}
        strokeWidth="1"
        opacity={0.6}
      />
      <Line
        x1={leftX + 5}
        y1={PAD + 48 + topInset}
        x2={leftX + 5}
        y2={H - (PAD + 48 + bottomInset)}
        stroke={SEPIA_DIM}
        strokeWidth="0.5"
        opacity={0.5}
      />

      <Line
        x1={rightX}
        y1={PAD + 48 + topInset}
        x2={rightX}
        y2={H - (PAD + 48 + bottomInset)}
        stroke={INK}
        strokeWidth="1"
        opacity={0.6}
      />
      <Line
        x1={rightX - 5}
        y1={PAD + 48 + topInset}
        x2={rightX - 5}
        y2={H - (PAD + 48 + bottomInset)}
        stroke={SEPIA_DIM}
        strokeWidth="0.5"
        opacity={0.5}
      />
    </Svg>
  );
}

const Divider = () => (
  <Svg width={200} height={20} viewBox="0 0 200 20">
    <Line x1={0} y1={10} x2={78} y2={10} stroke={SEPIA_DIM} strokeWidth="0.8" />
    <Path
      d="M 100 3 L 108 10 L 100 17 L 92 10 Z"
      fill="none"
      stroke={SEPIA}
      strokeWidth="1.3"
    />
    <Circle cx="100" cy="10" r="2" fill={SEPIA} />
    <Circle cx="87" cy="10" r="1.2" fill={SEPIA_DIM} />
    <Circle cx="113" cy="10" r="1.2" fill={SEPIA_DIM} />
    <Line
      x1={122}
      y1={10}
      x2={200}
      y2={10}
      stroke={SEPIA_DIM}
      strokeWidth="0.8"
    />
  </Svg>
);

function LoginContent() {
  const insets = useSafeAreaInsets();

  function handleLogin() {
    router.replace("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={PARCHMENT} />

      <DecorativeFrame topInset={insets.top} bottomInset={insets.bottom} />

      <View style={[styles.corner, { top: insets.top + 6, left: PAD }]}>
        <CornerOrnament />
      </View>
      <View style={[styles.corner, { top: insets.top + 6, right: PAD }]}>
        <CornerOrnament flipX />
      </View>
      <View style={[styles.corner, { bottom: insets.bottom + 24, left: PAD }]}>
        <CornerOrnament flipY />
      </View>
      <View style={[styles.corner, { bottom: insets.bottom + 24, right: PAD }]}>
        <CornerOrnament flipX flipY />
      </View>

      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top + 24,
            paddingBottom: insets.bottom + 24,
          },
        ]}
      >
        <Divider />

        <View style={styles.titleBlock}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subtitle}>Crie sua conta</Text>
        </View>

        <Divider />

        <View style={styles.formArea}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <TextInput
              placeholder="Nome"
              placeholderTextColor={SEPIA}
              style={[styles.input, { width: "48.5%" }]}
            />
            <TextInput
              placeholder="Sobrenome"
              placeholderTextColor={SEPIA}
              style={[styles.input, { width: "48.5%" }]}
            />
          </View>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor={SEPIA}
            style={styles.input}
          />

          <View style={{ flexDirection: "row", gap: 8 }}>
            <TextInput
              placeholder="Telefone"
              placeholderTextColor={SEPIA}
              style={[styles.input, { width: "48.5%" }]}
            />
            <TextInput
              placeholder="CPF"
              placeholderTextColor={SEPIA}
              style={[styles.input, { width: "48.5%" }]}
            />
          </View>

          <TextInput
            placeholder="Senha"
            placeholderTextColor={SEPIA}
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor={SEPIA}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.btnPrimary}
            activeOpacity={0.8}
            onPress={() => handleLogin()}
          >
            <Text style={styles.btnPrimaryText}>Criar uma conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.btnCreate}>Já possui uma conta?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function LoginScreen() {
  return (
    <SafeAreaProvider>
      <LoginContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PARCHMENT,
  },
  corner: {
    position: "absolute",
    width: 48,
    height: 48,
    zIndex: 10,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 55,
    gap: 24,
    marginBottom: 32,
  },
  logoOuter: {
    width: 168,
    height: 168,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: INK,
    padding: 6,
    backgroundColor: PARCHMENT2,
    shadowColor: INK,
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoInner: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: SEPIA,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PARCHMENT,
  },
  logoText: {
    fontFamily: "serif",
    fontSize: 16,
    letterSpacing: 6,
    color: INK,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  titleBlock: {
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontFamily: "serif",
    fontSize: 30,
    color: INK,
    letterSpacing: 2,
    fontWeight: "400",
  },
  subtitle: {
    fontFamily: "serif",
    fontSize: 13,
    color: SEPIA,
    letterSpacing: 0.5,
    fontStyle: "italic",
    textAlign: "center",
  },
  formArea: {
    width: "100%",
    gap: 14,
    marginTop: 4,
  },
  input: {
    borderWidth: 1.5,
    borderColor: SEPIA,
    backgroundColor: "transparent",
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontFamily: "serif",
    fontSize: 15,
    color: INK,
  },
  btnPrimary: {
    backgroundColor: INK,
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: INK,
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 4,
  },
  btnPrimaryText: {
    fontFamily: "serif",
    color: PARCHMENT,
    fontSize: 15,
    letterSpacing: 3,
  },
  btnOutline: {
    borderWidth: 1.5,
    borderColor: SEPIA,
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  btnOutlineText: {
    fontFamily: "serif",
    color: SEPIA,
    fontSize: 15,
    letterSpacing: 2,
    fontStyle: "italic",
  },
  btnCreate: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: "serif",
  },
});
